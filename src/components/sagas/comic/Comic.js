import { importAll } from '../../../helpers/hSVol1';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box, Grid, Input, Slider, Typography } from '@mui/material';
import { useState } from 'react';
import ImageSearchTwoToneIcon from '@mui/icons-material/ImageSearchTwoTone';


export const Comic = () => {

    const hSVol1 = importAll(require.context('../../../assets/vol1/vol1-1', false, /.(png|jpe?g|svg)$/));

    const [value, setValue] = useState(50);


    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
      };
    

    return (
        <>

            <Box m="auto" sx={{ width: 250 }}>
                <Grid sx={{ alignItems: "center" }} >
                    <ImageSearchTwoToneIcon />
                </Grid>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    value={typeof value === 'number' ? value : 50}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                    marks
                    step={10}
                    min={50}
                    max={100}
                  />
                </Grid>
              </Grid>
            </Box>

            <Carousel
                centerMode={true}
                centerSlidePercentage={value}
                className="wow fadeIn"
            >
                {hSVol1.map( (image, i) => {
                    return(
                    <div key={i}>
                        <img key={i} src={image} />
                    </div>
                    )
                })}
            </Carousel>

            
        </>
    )
}
