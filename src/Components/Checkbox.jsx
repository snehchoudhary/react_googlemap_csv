import { useState} from 'react';

export default function CheckboxComponent() {
    const [isChecked, setIsChecked] = useState(false);
    const [items, setItems] = useState([
        { id: 1, text: 'ACVG_VSS_DB', checked: false },
        {id: 2, text: 'CIPS', checked: false },
        {id: 3, text: 'DCVGPercentIR', checked: false },
        {id: 4, text: 'ACPSP', checked: false },
        {id: 5, text: 'DepthOfCover', checked: true } 
    ]);

    const handleSingleCheck = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleItemCheck = (id) => {
        setItems(items.map(item =>
            item.id === id ? {...item, checked:true} : {...item, checked:false}
        ));
    };

    return (

        <div>
            <h3 className='text-lg font-semibold mb-2'>CSV Columns</h3>

            <div className='space-y-6'>
                {items.map(item => (
                    <label key={item.id} className = "flex items-center space-x-2 cursor-pointer">
                        <input
                        type='checkbox'
                        checked={item.checked}
                        onChange={() => handleItemCheck(item.id)}
                        className='w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500'/>

                        <span className={`${item.checked ? 'line-through text-gray-500' : ''}`}>
                {item.text}
              </span>
                    </label>
                ))}
            </div>

            <p className='text-sm text-gray-600 mt-3'>
                Completed: {items.filter(item => item.checked).length}/ {items.length}
            </p>
        </div>
    )
}

