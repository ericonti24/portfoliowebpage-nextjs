'use client'

import {useState, useEffect} from 'react'
import Project from '../components/project'
import {PROJECTS} from '../api/data/data'
import {Center, Flex, Text} from '@chakra-ui/react'
import Milestones from '../components/milestones'

const MilestonesSection = () => {

  return (
    <div id='milestones-section'>
      <Milestones/>
    </div>
  )
}

export default MilestonesSection