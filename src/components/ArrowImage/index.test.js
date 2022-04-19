import { render, screen } from '@testing-library/react';
import ArrowImage from './index';
import downRedArrow from '../../assets/red-arrow-down.png';
import upGreenArrow from '../../assets/green-arrow-up.png';

test('renders green up arrow image', () => {
    render(<ArrowImage priceChange={5.00}/>);
    //const container = <img src={upGreenArrow} className="arrow-image" alt="Arrow"/>;
    expect(container).toMatchSnapshot()
});

/*test('renders red down arrow image', () => {
    render(<ArrowImage priceChange={-5.00}/>);
  
  });*/
