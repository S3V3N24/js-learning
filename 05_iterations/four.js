const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple '
}

for (const key in myObject) 
    // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
    
