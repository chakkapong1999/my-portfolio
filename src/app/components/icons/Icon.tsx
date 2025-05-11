import { Box } from "@mui/material";
import Image from "next/image";

export default function GitIcon({ skill }: Readonly<{ skill: string }>) {
    return (
        <Box>
            <Image
                src={`/static/svg/${skill}.svg`}
                alt="icon"
                width={50}
                height={50}
            />
        </Box>
        
    )
}