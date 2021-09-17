import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Title from '../../component/admin/title'
import DataGridManagerOrder from '../../component/admin/managetOrder/dataGrid'

export default function AdminOrder() {
    return (
        <>
            <Grid container spacing={3} alignItems="center">
                {/* Chart */}
                <Grid item xs={12} md={12} lg={12}>
                    <Paper>
                        <Grid
                            container
                            justifyContent="space-between"
                        >
                            <Title>Categorys Manage</Title>
                        </Grid>
                        <DataGridManagerOrder />
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}
