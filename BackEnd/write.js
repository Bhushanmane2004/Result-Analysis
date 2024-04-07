import reader from 'xlsx';
import writer from 'xlsx';

// Read the Excel file
function ExtractHeader(path){


    const file = reader.readFile(path);

// Get the first sheet name
const sheetName = file.SheetNames[0];

// Read the header (first row) from the first sheet
const header = reader.utils.sheet_to_json(file.Sheets[sheetName], { header: 1 })[13];

// Get the range of the sheet
for(let i=0;i<5;i++){
    const range = reader.utils.decode_range(file.Sheets[sheetName]['!ref']);

// Shift the rows up by one to remove the first row
for (let R = 0; R < range.e.r; ++R) {
    for (let C = range.s.c; C <= range.e.c; ++C) {
        const cell_address = { c: C, r: R };
        file.Sheets[sheetName][reader.utils.encode_cell(cell_address)] = 
            file.Sheets[sheetName][reader.utils.encode_cell({ c: C, r: R + 1 })];
    }
}

// Update the range to reflect the removed row
range.e.r--;

// Remove the last row (which was duplicated)
delete file.Sheets[sheetName][reader.utils.encode_range({ s: { c: 0, r: range.e.r + 1 }, e: { c: range.e.c, r: range.e.r + 1 } })];

// Update the range in the sheet
file.Sheets[sheetName]['!ref'] = reader.utils.encode_range(range);

// Write the modified file without the first row
writer.writeFile(file,'Dataset\\CSE-AI\\Unitwise Marks\\ESE\\ES21203CA_modified.xls');
}

// Log the header
console.log("Header saved:", header);
console.log("First row removed successfully.");
return header;


}

ExtractHeader('Dataset\\CSE-AI\\Unitwise Marks\\ESE\\ES21203CA.xls')