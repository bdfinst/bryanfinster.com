import { Grid, Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import Card from '../common/Card'
import CardContent from '../common/CardContent'

const useStyles = makeStyles((theme) => {
  return {
    title: {
      fontSize: 25,
      textAlign: 'center',
    },
    subTitle: {
      fontSize: 18,
      textAlign: 'center',
    },
    text: {
      fontSize: 14,
    },
  }
})

export default (props) => {
  const classes = useStyles()

  const renderData = () => {
    const { dataArr } = props

    return dataArr.map((data) => {
      return (
        <Grid item xs={3}>
          <Typography className={classes.subTitle}>
            <Link href={data.website}>{data.title}</Link>
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography className={classes.text} align="left">
                {data.awarder}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.text} align="right">
                {data.date}
              </Typography>
            </Grid>
          </Grid>

          <Typography className={classes.text}>{data.summary}</Typography>
        </Grid>
      )
    })
  }

  const { dataArr } = props

  if (!dataArr || dataArr.length === 0) return <div />

  return (
    <Card title="Awards">
      <CardContent>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={3}
        >
          {renderData()}
        </Grid>
      </CardContent>
    </Card>
  )
}
