import { importAll } from '../../../helpers/hSVol1';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box, Grid, Slider } from '@mui/material';
import { useState } from 'react';
import ImageSearchTwoToneIcon from '@mui/icons-material/ImageSearchTwoTone';
import { comicImages, imgJson } from '../../../helpers/getImages';


export const Comic = ({volume}) => {

    const [value, setValue] = useState(50);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
      };
    const newVol = imgJson.vol1[`vol1${volume}`]
    
      const rows = [];
      for (let i = 1; i < newVol; i++) {
          rows.push(<div key={i}>
            <img key={i} src={comicImages(`./vol1/vol1-${volume}/vol1-${volume}-${i}.jpg`)} />
        </div>);
      }

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
                swipeable={false}
                centerMode={true}
                centerSlidePercentage={value}
                className="wow fadeIn"
            >
                {/* {hSVol1.map( (image, i) => {
                    return(
                    <div key={i}>
                        <img key={i} src={image} />
                    </div>
                    )
                })} */}

              {rows}
            </Carousel>

            
        </>
    )
}
