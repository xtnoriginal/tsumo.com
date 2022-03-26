// material
import {Box, Grid, Container, Typography, Avatar, TextField} from '@mui/material';
// components
import Page from '../components/Page';
import React from "react";
import {ProfileCard} from "../sections/profile";
import {TreeItem, TreeView} from "@mui/lab";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FolderIcon from '@mui/icons-material/Folder';


// ----------------------------------------------------------------------

export default function Files() {



    return (
        <Page title="Dashboard | Tsumo.com">
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Files</Typography>
                </Box>


                <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<FolderIcon/>}
                    defaultExpandIcon={<FolderOpenIcon/>}
                    sx={{ height: 240, flexGrow: 1, maxWidth: 1000, overflowY: 'auto' }}
                >
                    <TreeItem nodeId="1" label="Applications">
                        <TreeItem nodeId="2" label="Calendar" />
                    </TreeItem>
                    <TreeItem nodeId="5" label="Documents">
                        <TreeItem nodeId="10" label="OSS" />
                        <TreeItem nodeId="6" label="MUI">
                            <TreeItem nodeId="8" label="index.js" />
                        </TreeItem>
                    </TreeItem>
                </TreeView>
            </Container>
        </Page>
    );
}
