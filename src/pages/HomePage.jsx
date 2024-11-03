import {Slider} from '../components/home/Slider';
import {TopSales} from '../components/home/TopSales';
import {Categories} from '../components/home/Categories';
import {Registration} from '../components/home/Registration';

export function HomePage() {
    return (
      <div className="HomePage">
        <Slider />
        <TopSales />
        <Categories />
        <Registration />
      </div>
    )
  }