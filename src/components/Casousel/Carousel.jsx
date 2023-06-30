import * as React from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'
import List from '@mui/joy/List'
import ListDivider from '@mui/joy/ListDivider'
import ListItem from '@mui/joy/ListItem'
import ListItemContent from '@mui/joy/ListItemContent'
import ListItemButton from '@mui/joy/ListItemButton'

import ProductQuatity from '../../components/ProductQuantity/ProductQuantity'

const data = [
    {
        src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
        title: 'Cremalleras',
        description: '2 metros',
    },
    {
        src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
        title: 'Sensores',
        description: 'Opticos pareja',
    },
    {
        src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
        title: 'Mandos',
        description: 'Mando extra',
    },
]

export default function FlexRowRatio() {
    return (
        <Sheet
            variant="outlined"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                borderRadius: 'xs',
            }}
        >
            <List sx={{ py: 'var(--ListDivider-gap)' }}>
                {data.map((item, index) => (
                    <React.Fragment key={item.title}>
                        <ListItem>
                            <ListItemButton sx={{ gap: 1 }}>
                                <AspectRatio
                                    sx={{
                                        flexBasis: 100,
                                        borderRadius: 'xs',
                                        overflow: 'auto',
                                    }}
                                >
                                    <img
                                        src={`${item.src}?w=120&fit=crop&auto=format`}
                                        srcSet={`${item.src}?w=120&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                    />
                                </AspectRatio>
                                <ListItemContent>
                                    <Typography fontWeight="md">
                                        {item.title}
                                    </Typography>
                                    <Typography level="body2">
                                        {item.description}
                                    </Typography>
                                </ListItemContent>
                            </ListItemButton>
                            <ProductQuatity vertical />
                        </ListItem>
                        {index !== data.length - 1 && <ListDivider />}
                    </React.Fragment>
                ))}
            </List>
        </Sheet>
    )
}
