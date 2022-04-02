import React, { useState } from "react";

function RadioCheckBox() {

    const [idCheck, setIdCheck] = useState();

    console.log(idCheck)

    return (
        <div className="App">
            {
                arr.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <input type="radio" checked={idCheck === item.id} onChange={() => setIdCheck(item.id)} />{item.name}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default RadioCheckBox;
