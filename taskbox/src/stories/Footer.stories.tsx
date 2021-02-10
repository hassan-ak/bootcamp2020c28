import Footer from '../components/footer';

const footerStories = {
    title: 'Footer',
    component: Footer,
}
export default footerStories;

export function Left(){
    return(
        <Footer aligned="left"/>
    )
}

export function Center(){
    return(
        <Footer aligned="center"/>
    )
}

export function Right(){
    return(
        <Footer aligned="right"/>
    )
}