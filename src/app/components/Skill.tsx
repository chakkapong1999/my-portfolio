import { Box, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const skillList = [
    {
        icon: <GitHubIcon fontSize="large"/>,
        name: 'Git',
    },
    {
        icon: <GitHubIcon fontSize="large"/>,
        name: 'HTML/CSS',
    },
    {
        icon: <GitHubIcon fontSize="large"/>,
        name: 'Javascript',
    },
    {
        icon: <GitHubIcon fontSize="large"/>,
        name: 'React',
    },
    {
        icon: <GitHubIcon fontSize="large"/>,
        name: 'Java',
    },
    {
        icon: <GitHubIcon fontSize="large"/>,
        name: 'Springboot',
    },
    {
        icon: <GitHubIcon fontSize="large"/>,
        name: 'Docker',
    },
    {
        icon: <GitHubIcon fontSize="large"/>,
        name: 'Jenkins',
    }
]

export default function Skill() {
    return (
        <Box sx={{ px: 30, py: 5, mt: 3 }}>
            <Box>            
                <Typography variant="h4" gutterBottom fontWeight='bold' textAlign='center'>My Skills</Typography>
                <Box sx={{
                    mt: 5,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, minmax(6.5rem, 1fr))',
                    alignItems: 'center',
                    justifyItems: 'center',
                    rowGap: 5,
                }}>
                    {skillList.map((skill, index) => {
                        return (
                            <Box 
                                key={skill.name + index} 
                                sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-around', 
                                    flexDirection: 'column', 
                                    alignItems: 'center', 
                                    border: '1px solid', 
                                    borderRadius: 2, 
                                    padding: 2, 
                                    width: '9rem', 
                                    height: '9rem',
                                    '&:hover': {
                                        // width: '8rem', 
                                        // height: '8rem',
                                        // color: 'primary.main',
                                        // backgroundColor: 'secondary.main',
                                    },
                                }}
                            >
                                {skill.icon}
                                <Typography variant="h6">{skill.name}</Typography>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}