import PopUp from '../PopUp';
import { useState } from 'react';

const PostFunc = (props) => {

    const [button, setButton] = useState(false);



    return (
        <div className="postfunc-wrapper-ele">
            <div className="post-button" onClick={() => setButton(true)}>
                Post!
                <PopUp trigger={button} setTrigger={setButton}>
                    
                </PopUp>
            </div>
        </div>
    );
}

export default PostFunc;