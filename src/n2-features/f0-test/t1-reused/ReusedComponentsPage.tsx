import React from 'react';
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

const ReusedComponentsPage = () => {
    return (
        <div>
            <p>Reused Super Components</p>
            <div>
                <SuperInputText/>
            </div>
            <div>
                <SuperButton>Default button</SuperButton>
            </div>
            <div>
                <SuperCheckbox/>
            </div>
            <div>
                <SuperEditableSpan value={'Hardcode span text'}/>
            </div>
            <div>
                <SuperSelect options={["1","2","3"]} value={"2"}/>
            </div>
            <div>
                <SuperRadio options={["X","Y","Z"]} value={"Z"}/>
            </div>
            <div>
                <SuperRange/>
                <SuperDoubleRange multiValue={[20,100]} onChangeRange2={(e)=>console.log('changeRange2')} onChangeRange={()=>console.log('changeRange1')}/>
            </div>
        </div>
    );
};

export default ReusedComponentsPage;