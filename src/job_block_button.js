import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Box, Button } from '@chakra-ui/react'
import JobBlockButtonBadge from './job_block_button_badge'
import CVSendBox from "./send_cv";
import theme_pink from './color/theme_pink';

function JobBlockButton({companyname, sbtRequired, buttonStates, isEligible}) {
    const initialFocusRef = React.useRef();   
    return (
      <Popover
        initialFocusRef={initialFocusRef}
        placement='bottom'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          {isEligible?<Button bg="#afd2c9">Apply</Button>:<Button bg="#f49090">Apply</Button>}
        </PopoverTrigger>
        {isEligible ? <PopoverContent color='white' bg='#77b2a4' borderColor='#77b2a4'>
          <PopoverHeader pt={4} fontWeight='bold' border='0'>
            Apply
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Box> 
              <JobBlockButtonBadge sbtRequired={sbtRequired} buttonStates={buttonStates}/>
            </Box>
          </PopoverBody>
          <PopoverFooter
            border='0'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            pb={4}
          >
            <CVSendBox isEligible={isEligible}/>           
          </PopoverFooter>
        </PopoverContent> : 
        
        <PopoverContent color='white' bg='#f17070' borderColor='#f17070'>
        <PopoverHeader pt={4} fontWeight='bold' border='0'>
          Apply
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Box> 
            <JobBlockButtonBadge sbtRequired={sbtRequired} buttonStates={buttonStates}/>
          </Box>
        </PopoverBody>
        <PopoverFooter
          border='0'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          pb={4}
        >
          <CVSendBox isEligible={isEligible}/>           
        </PopoverFooter>
      </PopoverContent>}
        
      </Popover>
    )
  }

  export default JobBlockButton