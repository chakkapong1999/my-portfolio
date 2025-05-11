import { Avatar, Box, IconButton, Typography } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Skill from "./Skill";

const MyProfile = () => {
    return (
        <Box>
             <Avatar src="/static/Chakkaphong.JPG" sx={{ width: '20rem', height: '30rem'}}/>
        </Box>
    )
}

const Instruction = () => {
    return (
        <Box textAlign="left">
            <Box display='flex' columnGap={1}>
                <Typography variant="h4" gutterBottom>Hello I&apos;m </Typography>
                <Typography variant="h4" gutterBottom fontWeight='bold'>Chakkaphong Max.</Typography>
            </Box>
            <Box display='flex' columnGap={1}>
                <Typography variant="h4" gutterBottom fontWeight='bold'>Backend</Typography>
                <Typography variant="h4" gutterBottom>Developer</Typography>
            </Box>
            <Box display='flex' columnGap={1}>
                <Typography variant="h4" gutterBottom>Based In</Typography>
                <Typography variant="h4" gutterBottom fontWeight='bold'>Thailand.</Typography>
            </Box>
        </Box>
    )
}

const Detail = () => {
    return (
        <Box>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repellat aspernatur et sunt consectetur amet. Eius consequatur saepe numquam nesciunt at, inventore a accusantium nam! Ex laudantium mollitia provident error illum praesentium quae corporis magni est asperiores animi voluptatem deleniti veniam ipsum aliquam excepturi reiciendis ipsa deserunt maiores, nam necessitatibus.</Typography>
            <Box sx={{ mt: 5, display: 'flex', columnGap: 1 }}>
                <IconButton onClick={() => handleOnclick('tel')} color="primary">
                    <CallIcon />
                </IconButton>
                <IconButton onClick={() => handleOnclick('mail')} color="primary">
                    <EmailIcon />
                </IconButton>
                <IconButton onClick={() => handleOnclick('git')} color="primary">
                    <GitHubIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

const handleOnclick = (type: 'tel' | 'mail' | 'git') => {
    if (type === 'mail') {
        window.location.assign('mailto:chakkappong@gmail.com');
    } else if (type === 'git') {
        window.open('https://github.com/chakkapong1999', '_blank')
    } else {
        window.location.assign('tel:0633435684')
    }
}

export default function Body() {

    return (
        <Box>
            <Box sx={{ px: 30, py: 5, display: 'flex', justifyContent: 'space-between', columnGap: 10 }}>
                <Box>
                    <Instruction />
                    <Detail />
                </Box>
                <MyProfile />
            </Box>
            <Skill />
        </Box>
        
    )
}