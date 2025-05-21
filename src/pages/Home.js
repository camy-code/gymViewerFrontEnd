import ColorPick from "../tools/ColorPick"

// The following are my MUI imports 
import Grid from "@mui/material/Grid2"
import {Box, Typography} from "@mui/material"
import { Searcher } from "../components/Searcher"
import { ButtonGroup } from "../components/ButtonGroup"
import GymCard from "../components/GymCard"
import { useState, useEffect, use } from "react"
import Loading from "./Loading"

// After webscraper todo:
     // 1.  Make the top bar pretty
     // 2. Make search work.
     // 4. Add loading to be super elegant.

const Home = () => {
    const [isLoad, setIsLoad] = useState(false);
    const [mList, setMList] = useState([]);
    // the show list
    const [mSlist, setMSList] = useState([]);
    
    useEffect(() => {
        setIsLoad(true);
        // Fetch the data from the API
        fetch('http://127.0.0.1:5000/activities').then(
            res => res.json()
        ).then(
            data => {
                console.log(data);
                setMList(data);
                let tempLS = [...data]; // OOGA BOOGA clone
                tempLS[0].expand = true; // set the first one to be expanded
                setMList(tempLS);
                setMSList(tempLS);

                setIsLoad(false); // so we are no longer loading
            }
        ).catch(
            err => {
                console.log("ERROR:")
                console.log(err)
                setIsLoad(true); 
            }
        )
    }, []);
 
    
    const tempArr = [
        {name:"Wednesday, April 30", 
            expand:false,
            activities:[
            {color:"#E0E0E0", gym:"red gym", sport:"hockey", time:"12-1pm"},
            {color:"#E0E0E0", gym:"red gym", sport:"hockey", time:"12-1pm"},
            {color:"#E0E0E0", gym:"red gym", sport:"hockey", time:"12-1pm"},   
        ]
    },

    ] // update later
    const [val, setVal] = useState(true); // Change this later
    // Above is just dummy date

    // change a method 
    const handleClick = (index) => {
        let tempLS = [...mSlist]; // OOGA BOOGA clone
        tempLS[index].expand = !tempLS[index].expand;
        setMSList(tempLS);
    }

    const massCardChange = (val) => {
        let tempLS = [...mSlist]; // OOGA BOOGA clone
        for (let i = 0; i < tempLS.length; i++) {
            tempLS[i].expand = val;
        }
        setMSList(tempLS);
    }

    const expandClick = () => {
        massCardChange(true);
    }
    const collapseClick = () => {
        massCardChange(false);
    }
  
      // ----- search stuff -----
        // 1. fetch the data from API
    const [searchList, setSearchList] = useState([]);

    useEffect(() => {
setIsLoad(true);
        // Fetch the data from the API
        fetch('http://127.0.0.1:5000/sports').then(
            res => res.json()
        ).then(
            data => {
            
                setSearchList(data);
                setIsLoad(false); // so we are no longer loading
            }
        ).catch(
            err => {
                console.log("ERROR:")
                console.log(err)
                setIsLoad(true); 
            }
        )

    },[])

    // Time for search logic 

    const [searchIndex , setSearchIndex] = useState(0);
    const handleSearchChange = (index) => {
        setSearchIndex(index);
    }
    
    const onSearch = () => { // The last things to do here
        console.log("search hello")
      
        let tempLS = [...mList]; 
expandClick();
        console.log(tempLS)
        if (searchIndex === 0) {
            setMSList(tempLS);
        } else {
            // Time to do some filtering
            // filter guide
                //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
            const searchVal = searchList[searchIndex];
            let filterLS = tempLS.filter((arr) => arr.activities.some((act) => act.sport === searchVal));
            
            for (let i = 0; i < filterLS.length; i++) {
                for (let j = 0; j < filterLS[i].activities.length; j++) {
                    if (filterLS[i].activities[j].sport !== searchVal) {
                        filterLS[i].activities.splice(j, 1);
                        j--;
                    } 
                }
            }

                setMSList(filterLS);
        }
        
    }

   // End of the logic 

    if (isLoad) {
        return <Loading/>
    }

  

    return <>
    <Box sx={{   animation: 'fadeIn 1s ease-in forwards',
        '@keyframes fadeIn': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },}}>
        <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} >
            <Typography variant="h4" fontSize={40} sx={{marginTop:5}}>Open Gym Times</Typography>
            {/* step 1 */}
            <Box sx={{marginTop:3}}>
            <Searcher searchFunc={() => {onSearch()}} sportList={searchList} value={searchIndex} setVal={(i)=> handleSearchChange(i)}/>
            </Box>
            {/* step 2 */}
            <ButtonGroup expandClick={()=>{expandClick()}} collapseClick={()=>{collapseClick()}}/>


            {/* step 3 */}
            
            <Grid container direction={"column"} spacing={5} sx={{marginTop:2, marginBottom:4}}>
            {mSlist.map((a, index)=>(
                <>
                <GymCard day={a.name} ActList={a.activities} val={a.expand} setVal={()=>(handleClick(index))}/>
         
                </>
            ))}
            </Grid>
        </Grid>
        </Box>
    </>
        
}

export default Home;
// I think this is how we do it

// Useful article on Box 
// https://mui.com/material-ui/react-box/?srsltid=AfmBOoq6lVkp410XmepUTrSB6ZMHQ6b-7_JVHiGst57I4P1kRnH2goLn