# Auto Complete With Api 

Using Mui auto complete to setup pluggable auto complete component.

# instaltion 

```bash
npm i autocomplete-with-api --save
```

# How to use 


```tsx
    import React from 'react';

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
 ```


