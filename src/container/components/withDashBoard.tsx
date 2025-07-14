import api from '@/service/apiRickAndMorty';
import React from 'react';

const withDashBoard = <P extends object>(
    Components: React.ComponentType<P>
): React.FC<P> => {
    return (props: P) => {

        // const { results } = await api.page.getPage("22")



        const action = {};
        return <Components {...action} {...props} />;
    };
};

export default withDashBoard;
