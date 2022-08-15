import React from 'react'
import "../../Styles/FilterPanel.css"
import { Checkbox, VStack } from '@chakra-ui/react'

export default function FilterPanel() {
  return (
    <div>
    <div className='input-group'>
      <h2 className='label'>Category</h2>
      <h4>
        <VStack className='filter_stack' direction='row'>
        <Checkbox size='lg' className='filter_checkbox'>
            Candidate experience
          </Checkbox>
          <Checkbox className='filter_checkbox'>
            HRIS & onboarding
          </Checkbox>
          <Checkbox className='filter_checkbox' >
            Job distribution
          </Checkbox>
          <Checkbox className='filter_checkbox'>
            Screening tools
          </Checkbox>
          <Checkbox className='filter_checkbox'>
            Sourcing
          </Checkbox>
          <Checkbox className='filter_checkbox'>
            Analytics
          </Checkbox>
        </VStack>
      </h4>
    </div>
  </div>
  )
}

