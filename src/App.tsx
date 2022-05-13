import React from 'react';
import AutoCompleteWithApi, {OptionProps} from "./lib/AutoCompleteWithApi";
import Box from "@mui/material/Box";


const listToSearch: OptionProps[] = [{id: "1", value: "First"}, {id: "2", value: "Second"}, {
    id: "3",
    value: "third One first"
}];

async function search(input: string): Promise<OptionProps[]> {

    return listToSearch.filter(t => t.value.toLowerCase().includes(input.toLowerCase()));
}


function App() {

    return (
        <div className="App">
            <Box p={5}>
                <h4>Search now </h4>
                <AutoCompleteWithApi onSearch={search} id={"search-field"} selectedOption={undefined}/>
            </Box>
        </div>
    );
}

export default App;
