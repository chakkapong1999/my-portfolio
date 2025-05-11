'use client';
import { Box, Typography } from "@mui/material";
import Icon from "./icons/Icon";

const skillList = [
    {
        icon: <Icon skill="git"/>,
        name: 'Git',
    },
    {
        icon: <Icon skill="javascript"/>,
        name: 'Javascript',
    },
    {
        icon: <Icon skill="react"/>,
        name: 'React',
    },
    {
        icon: <Icon skill="java"/>,
        name: 'Java',
    },
    {
        icon: <Icon skill="springboot"/>,
        name: 'Springboot',
    },
    {
        icon: <Icon skill="docker"/>,
        name: 'Docker',
    },
    {
        icon: <Icon skill="jenkins"/>,
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
                                    borderRadius: 3, 
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
                                <Typography fontWeight={600}>{skill.name}</Typography>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}