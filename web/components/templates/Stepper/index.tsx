import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Step, StepButton, Stepper as MuiStepper } from '@mui/material'
import { FC, useEffect, useMemo, useState } from 'react'
import { Button } from '@/atoms/Button/Button'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  labels: string[]
  children: JSX.Element[]
  _contentCss?: SerializedStyles
  validationMessage: () => string
  completed: () => void
  onStepChanged?: (nextStep: number, prevStep: number) => void
  moveStep?: number
}

export const Stepper: FC<PropTypes> = ({
  _css,
  _contentCss,
  labels,
  children,
  validationMessage,
  completed,
  onStepChanged,
  moveStep,
}) => {
  const [activeStep, setActiveStep] = useState(0)
  useEffect(() => setActiveStep(moveStep ?? 0), [moveStep])
  const handleStep = (step: number) => () => {
    if (onStepChanged) {
      onStepChanged(step, activeStep)
    }
    setActiveStep(step)
  }
  const goNext = () => {
    if (onStepChanged) {
      onStepChanged(activeStep + 1, activeStep)
    }
    setActiveStep(activeStep + 1)
  }
  const goPrev = () => {
    if (onStepChanged) {
      onStepChanged(activeStep - 1, activeStep)
    }
    setActiveStep(activeStep - 1)
  }
  const complete = () => {
    const errorMsg = validationMessage()
    if (errorMsg) {
      alert(errorMsg)
    } else {
      completed()
    }
  }

  const showPrevButton = useMemo(() => activeStep > 0, [activeStep])
  const showNextButton = useMemo(
    () => activeStep < children.length - 1,
    [activeStep, children]
  )
  const showCompleteButton = useMemo(
    () => activeStep >= children.length - 1,
    [activeStep, children]
  )

  return (
    <div css={[_css, styles.container]}>
      <MuiStepper nonLinear activeStep={activeStep}>
        {labels.map((label, i) => (
          <Step key={i} completed={i < activeStep}>
            <StepButton color="inherit" onClick={handleStep(i)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </MuiStepper>

      <div css={_contentCss}>{children[activeStep]}</div>

      <div css={styles.buttons}>
        {showPrevButton ? (
          <Button onClick={goPrev} variant="outlined">
            戻る
          </Button>
        ) : (
          <div />
        )}
        {showNextButton && <Button onClick={goNext}>次へ</Button>}
        {showCompleteButton && <Button onClick={complete}>完了</Button>}
      </div>
    </div>
  )
}
const styles = {
  container: css``,
  buttons: css`
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
  `,
}
