import React, { useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import Navbar from "./navbar";
import JobBlock from "./job_block";

const Job = ({account, setAccount, loggedIn, setLoggedIn, buttonStates, setButtonStates}) => {
  return(
    <div bg='red.400'> 
      <Box>
        <Navbar account={account} setAccount={setAccount} loggedIn={loggedIn} setLoggedIn={setLoggedIn} buttonStates={buttonStates} setButtonStates={setButtonStates}/>
        <Grid templateColumns="repeat(2, 1fr)" gap="6" p="6">
          <JobBlock companyname="Unipass BD" email="岗位职责：
1、把 UniPass 在 账户抽象（AA / ERC4337）方面的技术成果推广到整个以太坊（以及其他 EVM 生态） 
2、与行业核心开发者（比如以太坊基金会的researcher）一起，探索账户抽象（AA / 4337）的未来 
3、这个岗位能够深入参与到整个以太坊及相关生态的技术发展，“谈笑皆鸿儒”就是这个岗位的日常状态  

岗位要求： 
4、需要较强的英文能力（工作沟通听说读写无障碍，有海外学习工作经验者优先）
 5、要能够适应全球出差。" position="frontend" sbtRequired={[1,2]}  salary="￥10000-20000" buttonStates={buttonStates}/>
          <JobBlock companyname="R labs 前端工程师" email="岗位职责：
1、 参与前端界面设计开发，web系统PC端与移动端设计与实现 
2、根据产品需求，配合后端人员实现产品界面和交互功能，页面维护及性能优化 
3、 按时保质完成开发任务，及时发现并解决开发过程中出现的问题 
岗位要求： 
1、3年以上 Web 前端开发经验，使用 HTML5/JS/CSS3 等前端技术，能独立完成前端开发工作
2、熟悉React前端框架的使用，且至少2年以上相关开发经验" position="backend" sbtRequired={[0,1]} salary={"￥20000-25000"} buttonStates={buttonStates}/>
          <JobBlock companyname="币安 前端工程师" email="岗位职责：
1、 参与前端界面设计开发，web系统PC端与移动端设计与实现 
2、根据产品需求，配合后端人员实现产品界面和交互功能，页面维护及性能优化 
3、 按时保质完成开发任务，及时发现并解决开发过程中出现的问题 
岗位要求： 
1、3年以上 Web 前端开发经验，使用 HTML5/JS/CSS3 等前端技术，能独立完成前端开发工作
2、熟悉React前端框架的使用，且至少2年以上相关开发经验" position="fullstack" sbtRequired={[0,2]} salary={"￥20000-25000"} buttonStates={buttonStates}/>
          <JobBlock companyname="OKX 数据产品经理" email="岗位描述： 
1、负责数据产品的规划、研发和上线工作，包括但不限于数据仓库建设、数据可视化、数据分析平台等业务系统 
2、根据公司战略目标和市场需求，制定数据产品的开发计划，并推动团队按照计划快速迭代开发 
3、掌握市场信息及竞争动态，研究并分析用户需求，挖掘数据价值，优化数据产品功能和体验 
岗位要求： 
1、本科及以上学历，计算机、统计学、信息管理等相关专业优先考虑
2、具备3年以上数据产品或数据分析经验，熟悉数据仓库、数据可视化、数据分析平台等数据技术和工具
3、具备扎实的数据分析能力，精通SQL语言以及至少一种常用数据分析工具，如Python、R等" position="algorithm" sbtRequired={[0,1,2]} salary={"￥20000-25000"} buttonStates={buttonStates}/>
        </Grid>
      </Box>
    </div>
    
  )
}

export default Job;

