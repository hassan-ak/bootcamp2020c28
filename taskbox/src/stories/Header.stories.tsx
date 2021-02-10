import Header from '../components/header';

const headerStories = {
    title: 'Header',
    component: Header,
}
export default headerStories;

export function Transparent(){
    return(
        <Header varient="transparent"/>
    )
}

export function ElevatedTransparent(){
    return(
        <Header varient="elevatedTransparent"/>
    )
}

export function Colored(){
    return(
        <Header varient="colored"/>
    )
}