import React from 'react';
import FaqHeader from './FaqHeader';
import SkillsCurses from './SkillsCurses';
import Suggestions from './Suggestions';

const Faq = () => {
    return (
        <div>
            <FaqHeader></FaqHeader>
            <Suggestions></Suggestions>
            <SkillsCurses></SkillsCurses>
        </div>
    );
};

export default Faq;