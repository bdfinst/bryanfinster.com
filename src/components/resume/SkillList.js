import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles({
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: 'blue',
  },
  skill: {
    fontSize: 15,
    textAlign: 'center',
    color: 'blue',
  },
  text: {
    fontSize: 14,
    textAlign: 'justified',
    color: 'textSecondary',
  },
  entity: {
    fontSize: 20,
    textAlign: 'left',
  },
  date: {
    fontSize: 15,
    textAlign: 'right',
  },
  position: {
    fontSize: 12,
    textAlign: 'left',
  },
})

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

export default (props) => {
  const classes = useStyles()

  const renderData = () => {
    const { dataArr, type } = props

    return dataArr.map((data) => {
      return (
        <>
          <Grid item xs={4}>
            <Typography className={classes.skill}>{data.name}</Typography>

            {data.keywords && data.keywords.length > 0 ? (
              data.keywords.map((keyword) => {
                const color = colors[Math.floor(Math.random() * colors.length)]
                return (
                  <Chip
                    label={keyword}
                    variant="outlined"
                    color="primary"
                    size="small"
                  />
                )
              })
            ) : (
              <div />
            )}
          </Grid>
        </>
      )
    })
  }

  const { dataArr, name } = props

  if (!dataArr || dataArr.length === 0) return <div />

  return (
    <Card>
      <CardHeader title="Skills" className={classes.title} />
      <CardContent>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {renderData()}
        </Grid>
      </CardContent>
    </Card>
  )
}
