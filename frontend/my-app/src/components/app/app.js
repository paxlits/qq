import AppHeader from "../appHeader/appHender";
import AppPageProductResults from "../appPageProductResults/appPageProductResults";
import PriceSlider from "../priceSlider/priceSlider";
function App(){
    return(
        <div className="app">
            <AppHeader/> 
            <AppPageProductResults/>
            <PriceSlider/>
        </div> 
    )
}

export default App;