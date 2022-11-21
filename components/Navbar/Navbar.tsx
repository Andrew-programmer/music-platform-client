import * as React from 'react';
import {styled, useTheme, Theme, CSSObject} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import styles from './Navbar.module.css';
import {ReactNode} from "react";
import {useRouter} from "next/router";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    overflowX: 'hidden',
    transition: '0.2s ease',
    background: 'rgba(0,0,0,1)',
});

const closedMixin = (theme: Theme): CSSObject => ({
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    background: '#0e0e0e',
    transition: '0.2s ease',
    zIndex: 9,
    borderRight: '1px black solid',
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        background: 'black',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Navbar() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const router = useRouter();
    const menuItems = [
        {text: 'Main', href: '/', key: 'main'},
        {text: 'Tracks', href: '/tracks', key: 'tracks'},
        {text: 'Albums', href: '/albums', key: 'albums'},
        {text: 'Upload track', href: '/tracks/create', key: 'upload'}
    ];

    const listItemClick = async (href: string) => {
        await router.push(href);
    }

    const setIcon = (key: string): ReactNode => {
        switch (key) {
            case 'main':
                return <HomeIcon className={styles.icon}/>
            case 'tracks':
                return <AudiotrackIcon className={styles.icon}/>
            case 'albums':
                return <LibraryMusicIcon className={styles.icon}/>
            case 'upload':
                return <CloudDownloadIcon className={styles.icon}/>
            default:
                return <HomeIcon className={styles.icon}/>
        }
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen} sx={{
                    '&:hover': {
                        background: '#0e0e0e'
                    }
                }}>
                    {!open ? <ChevronRightIcon className={styles.icon}/> : <ChevronLeftIcon className={styles.icon}/>}
                </IconButton>
            </DrawerHeader>
            <List>
                {menuItems.map(({text, href, key}) => (
                    <ListItem key={text} disablePadding className={styles.listItem}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                '&:hover': {
                                    opacity: 0.5,
                                    transition: '0.2s'
                                }
                            }}
                            onClick={() => listItemClick(href)}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {
                                    setIcon(key)
                                }
                            </ListItemIcon>
                            <ListItemText className={styles.listItemText} primary={text} sx={{opacity: open ? 1 : 0}}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );


}
