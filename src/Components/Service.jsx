import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/Card';
import Button from "./Button";

const colorVariants = {
    primary: {
        gradient: "bg-[linear-gradient(135deg,#00A3FF_0%,#0057FF_100%)]/10",
        hover: "hover:bg-[linear-gradient(135deg,#00A3FF_0%,#0057FF_100%)]/20",
        border: "border-[#00A3FF]/20",
        shadow: "shadow-[#00A3FF]/5",
        icon: "text-[#00A3FF]"
    },
    secondary: {
        gradient: "bg-[linear-gradient(135deg,#FF1E1E_0%,#FF9C1E_100%)]/10",
        hover: "hover:bg-[linear-gradient(135deg,#FF1E1E_0%,#FF9C1E_100%)]/20",
        border: "border-[#FF1E1E]/20",
        shadow: "shadow-[#FF1E1E]/5",
        icon: "text-[#FF1E1E]"
    },
    accent: {
        gradient: "bg-[linear-gradient(135deg,#7F00FF_0%,#E100FF_100%)]/10",
        hover: "hover:bg-[linear-gradient(135deg,#7F00FF_0%,#E100FF_100%)]/20",
        border: "border-[#7F00FF]/20",
        shadow: "shadow-[#7F00FF]/5",
        icon: "text-[#7F00FF]"
    }
};

function Service({ title, description, cta, color, imgURL }) {
    const theme = colorVariants[color] || colorVariants.primary;

    return (
        <Card 
            className={`relative h-full overflow-hidden ${theme.gradient} 
            transition-all duration-500 backdrop-blur-sm border ${theme.border} ${theme.shadow} 
            hover:shadow-lg hover:scale-[1.02] group ${theme.hover}`}
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.1)_100%)]" />
            
            <CardHeader className="relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[linear-gradient(135deg,#00A3FF_0%,#0057FF_100%)]/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500" />
                <CardTitle className="text-xl md:text-2xl font-display text-[#E1E7EF]">
                    {title}
                </CardTitle>
            </CardHeader>
            
            <CardContent className="relative">
                <motion.p 
                    className="text-[#E1E7EF]/80 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {description}
                </motion.p>
            </CardContent>
            
            {/* <CardFooter className="relative">
                <Button 
                    text={cta} 
                    imgURL={imgURL}
                    variant="outline"
                    className={`w-full justify-center border-2 ${theme.border} hover:bg-[#020817]/50`}
                />
            </CardFooter> */}
        </Card>
    );
}

export default Service;
