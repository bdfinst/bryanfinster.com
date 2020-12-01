import { Card, CardHeader } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      elevation: 0,
    },
    header: {
      fontSize: 25,
      textAlign: 'center',
      color: theme.palette.primary.main,
    },
  }
})

export default ({ title, children }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation={0}>
      {title ? (
        <CardHeader title={title} className={classes.header} />
      ) : (
        <div />
      )}
      <>{children}</>
    </Card>
  )
}
