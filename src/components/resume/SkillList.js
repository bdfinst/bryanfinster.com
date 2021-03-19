import { Chip, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import Card from '../common/Card'
import CardContent from '../common/CardContent'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.2),
    },
  },
  skill: {
    fontSize: 15,
    textAlign: 'center',
    color: theme.palette.primary.dark,
  },
  text: {
    fontSize: 14,
    textAlign: 'justified',
    color: theme.palette.secondary.main,
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
}))

export default (props) => {
  const classes = useStyles()

  const renderData = () => {
    const { dataArr } = props

    return dataArr.map((data) => (
      <>
        <Grid item xs={3}>
          <Typography className={classes.skill}>{data.name}</Typography>

          <div className={classes.root}>
            {data.keywords && data.keywords.length > 0 ? (
              data.keywords.map((keyword) => (
                <Chip
                  label={keyword}
                  variant="outlined"
                  color="primary"
                  size="small"
                />
              ))
            ) : (
              <div />
            )}
          </div>
        </Grid>
      </>
    ))
  }

  const { dataArr } = props

  if (!dataArr || dataArr.length === 0) return <div />

  return (
    <Card title="Skills">
      <CardContent>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          {renderData()}
        </Grid>
      </CardContent>
    </Card>
  )
}
