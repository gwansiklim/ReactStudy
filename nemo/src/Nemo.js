import React from 'react';

const Nemo = (props) => {
    const [count, setCount] = React.useState(3);
    console.log(count);
    const nemo_count = Array.from({ length: count }, (v, i) => i);

    const addNemo = () => {
        setCount(count + 1);
    }

    const removeNemo = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            window.alert("네모가 없아요!!");
        }



    }
    return (
        <>
            {
                nemo_count.map((n, i) => {
                    return (
                        <div
                            key={i}
                            style={{
                                width: "150px",
                                height: "150px",
                                backgroundColor: "#ddd",
                                margin: "10px",
                            }}>
                            nemo
                        </div>
                    )
                }
                )
            }

            < div >
                <button onClick={addNemo}>추가하기</button>
                <button onClick={removeNemo}>지우기</button>
            </div >
        </>
    );

}

export default Nemo;