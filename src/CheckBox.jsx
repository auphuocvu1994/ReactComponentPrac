import React, { useState } from "react";

function CheckBox() {

    const [lstIdCheck, setLstIdCheck] = useState([]);

    console.log(lstIdCheck)

    const handleSelect = (id) => {
        setLstIdCheck(prev => {
            const isCheck = lstIdCheck.includes(id)

            if (isCheck) {
                return lstIdCheck.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }

    return (
        <div className="App">
            {
                arr.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <input type="checkbox" checked={lstIdCheck.includes(item.id)} onChange={() => handleSelect(item.id)} />{item.name}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CheckBox;
