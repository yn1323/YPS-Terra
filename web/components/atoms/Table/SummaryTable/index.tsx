import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { FC } from 'react'
import { mediaQueries } from '@/ui/mixins/breakpoint'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  header: string[]
  body: string[][]
  spHideColumnIndex?: number[]
}

export const SummaryTable: FC<PropTypes> = ({
  _css,
  header,
  body,
  spHideColumnIndex = [],
}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {header.map((col, i) => (
            <TableCell
              css={[
                spHideColumnIndex.includes(i) ? styles.hiddenCell : undefined,
              ]}
              key={i}
            >
              {col}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {body.map((row, i) => (
          <TableRow key={i}>
            {row.map((col, _) => (
              <TableCell
                css={[
                  spHideColumnIndex.includes(i) ? styles.hiddenCell : undefined,
                ]}
                key={i}
              >
                {col}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

const styles = {
  hiddenCell: css`
    visibility: hidden;
    ${mediaQueries('sm')} {
      display: table-cell;
    }
  `,
}
