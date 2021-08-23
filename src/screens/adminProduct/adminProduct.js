import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Title from '../../component/admin/title'
import DataGridManagerProduct from '../../component/admin/manageProducts/dataGrid'
import FormAdd from '../../component/admin/manageProducts/formAdd'
import Modal from '@material-ui/core/Modal'

export default function Dashboard() {
    const [checked, setChecked] = React.useState(false)
    const [openModal, setOpenModal] = React.useState(false)

    const handleChange = () => {
        setChecked((prev) => !prev)
    }
    // modal
    const handleChangeModal = (open) => {
        setOpenModal(open)
    }

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
                            <Title>Products Manage</Title>
                            <FormControlLabel
                                control={
                                    <Switch
                                        size="medium"
                                        checked={checked}
                                        onChange={handleChange}
                                    />
                                }
                                label="Add New Product"
                            />
                        </Grid>
                        <DataGridManagerProduct
                            handleChangeModal={handleChangeModal}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Collapse in={checked}>
                        <Paper>
                            <Title>Add New Product</Title>
                            <Grid container>
                                <FormAdd action="add" />
                            </Grid>
                        </Paper>
                    </Collapse>
                </Grid>
            </Grid>
            <Modal
                open={openModal}
                onClose={() => handleChangeModal(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Paper
                    style={{
                        width: '60%',
                        margin: '10% auto',
                    }}
                >
                    <Grid item xs={12} md={12} lg={12}>
                        <FormAdd action="edit" />
                    </Grid>
                </Paper>
            </Modal>
        </>
    )
}
