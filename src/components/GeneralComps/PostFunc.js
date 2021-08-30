import { PostButton } from './GeneralCompStyles/PostFunc.styles';
import PopUp from '../PopUp';
import { useState } from 'react';

const PostFunc = (props) => {

    const [button, setButton] = useState(false);



    return (
        <PostButton onClick={() => setButton(true)}>
            Post!
            <PopUp trigger={button} setTrigger={setButton}>
                <h3>My Popup</h3>
            </PopUp>
        </PostButton>
    );
}

export default PostFunc;