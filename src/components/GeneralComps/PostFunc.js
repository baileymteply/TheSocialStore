import { PostButton, Wrapper } from './GeneralCompStyles/PostFunc.styles';
import PopUp from '../PopUp';
import { useState } from 'react';

const PostFunc = (props) => {

    const [button, setButton] = useState(false);



    return (
        <Wrapper>
            <PostButton onClick={() => setButton(true)}>
                Post!
                <PopUp trigger={button} setTrigger={setButton}>
                    
                </PopUp>
            </PostButton>
        </Wrapper>
    );
}

export default PostFunc;