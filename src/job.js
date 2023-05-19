import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import Navbar from "./Navbar";
import JobBlock from "./job_block";

const Job = () => {
  return(
    <Box>
        <Navbar />
        <Grid templateColumns="repeat(2, 1fr)" gap="6" p="6">
          <JobBlock companyname="Alibaba" email="ai@ali.org" position="frontend"/>
          <JobBlock companyname="Meituan" email="ai@mt.org" position="backend"/>
          <JobBlock companyname="Tiktok" email="ai@tiktok.org" position="fullstack"/>
          <JobBlock companyname="Tencent" email="ai@tencent.org" position="algorithm"/>
        </Grid>
    </Box>
  )
}

export default Job;

