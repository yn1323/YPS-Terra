import { Box, Button, HStack, VStack } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { StepButton } from '@/atoms/Step/StepButton'

type PropTypes = {
  labels: string[]
  children: JSX.Element[]
  defaultStep?: number
}

export const Step: FC<PropTypes> = ({ labels, children, defaultStep = 0 }) => {
  if (labels.length !== children.length) {
    console.error('Step: labels and children must be same length')
  }
  const [currentStep, setCurrentStep] = useState(defaultStep)

  return (
    <VStack
      h={['100%', '100%', '500px']}
      w="100%"
      spacing={4}
      justifyContent="space-between"
    >
      <VStack spacing={4} w="100%">
        <StepButton
          labels={labels}
          currentStep={currentStep}
          nextStep={setCurrentStep}
        />
        <Box>{children[currentStep]}</Box>
      </VStack>
      <HStack w="100%" justifyContent="space-between">
        <Box>
          {currentStep > 0 && (
            <Button onClick={() => setCurrentStep(currentStep - 1)}>
              前へ
            </Button>
          )}
        </Box>

        <Box>
          {currentStep < children.length - 1 && (
            <Button
              colorScheme="primary"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              次へ
            </Button>
          )}

          {currentStep === children.length - 1 && (
            <Button colorScheme="primary" onClick={() => alert('登録')}>
              登録
            </Button>
          )}
        </Box>
      </HStack>
    </VStack>
  )
}
