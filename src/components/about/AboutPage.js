import React from 'react'
import { Header } from '../ui/Header'
import { AboutContent } from './AboutContent'
import { AboutContentRight } from './AboutContentRight'
import { AboutFacts } from './AboutFacts'

export const AboutPage = () => {
  return (
    <>
        <Header 
            title={"About"}
        />

        <AboutContent 
            title={"Hack / Slash"}
            subtitle={"The Comic"}
            text={"Hack/Slash is a comic book series, launched from several one shots of the same name, published by Image Comics (previously by Devil's Due Publishing). The series was created by writer and sometime penciller Tim Seeley. The series follows horror victim Cassie Hack as she strikes back at the monsters who prey upon teenagers. These monsters are known as 'slashers', and are a mix of original villains and crossover appearances, such as the appearance of Re-Animator (from Herbert West-Reanimator) in Volume 1."}
            image={"img/hackslashvolume1.jpg"}
        />

        <AboutFacts />

        <AboutContentRight 
            title={"Tim Seeley"}
            subtitle={"The Comic"}
            text={"Tim Seeley is an American comic book artist and writer known for his work on books such as Grayson, Nightwing, G.I. Joe: A Real American Hero, G.I. Joe vs. Transformers and New Exiles. He is also the co-creator of the Image Comics titles Hack/Slash and Revival."}
            image={"img/timseeley.jpg"}
        />
    </>
  )
}
