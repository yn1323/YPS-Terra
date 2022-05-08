import { Box, Button, HStack, VStack } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { StepButton } from '@/atoms/Step/StepButton'

type PropTypes = {
  labels: string[]
  children: JSX.Element | JSX.Element[]
  defaultStep?: number
  onSubmit: (values: any) => void
  isLoading?: boolean
}

export const Step: FC<PropTypes> = ({
  labels,
  children,
  defaultStep = 0,
  onSubmit,
  isLoading = false,
}) => {
  children = Array.isArray(children) ? children : [children]
  if (labels.length !== children.length) {
    console.error('Step: labels and children must be same length')
  }
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    setCurrentStep(defaultStep === -1 ? 0 : defaultStep)
  }, [defaultStep])

  const form = useFormContext()
  const submit = form ? form.handleSubmit(onSubmit) : undefined

  return (
    <VStack
      h={['100%', '100%', '500px']}
      w="100%"
      spacing={4}
      justifyContent="space-between"
      as="form"
      onSubmit={submit}
    >
      <VStack spacing={4} w="100%">
        <StepButton
          labels={labels}
          currentStep={currentStep}
          nextStep={setCurrentStep}
        />
        <Box w="100%">{children[currentStep]}</Box>
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
            <Button colorScheme="primary" type="submit" isLoading={isLoading}>
              登録
            </Button>
          )}
        </Box>
      </HStack>
    </VStack>
  )
}
