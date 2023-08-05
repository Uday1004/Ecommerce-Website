import { products } from '../Utils/product';
import Select from 'react-select';
import "bootstrap/dist/css/bootstrap.css";



const options=[
    {value:"sofa",label:"Sofa"},
    { value: "chair", label: "Chair" },
    { value: "watch", label: "Watch" },
    { value: "mobile", label: "Mobile" },
    { value: "wireless", label: "Wireless" },
]



export default function FilterSelect({setFilterList}) {
    const handleChange=(selectedOption)=>{
        if (selectedOption.length === 0) {
            // If no options are selected, reset the filter list to show all products
            setFilterList(products);
        } else {
            // Filter the products based on the selected options
            const selectedCategories = selectedOption.map((option) => option.value);
            setFilterList(products.filter((item) => selectedCategories.includes(item.category)));
        }
    }
  
    return (
        <Select
        isMulti
        options={options}
        defaultValue={{value:"",label:"Filter by category"}}
        onChange={handleChange}
        />
  );
};
