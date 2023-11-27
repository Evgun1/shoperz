import { redirect } from 'react-router-dom';

const singInAction = ({ request, params }) => {
    console.log(request, params);
    redirect('/');
};

export default singInAction;
