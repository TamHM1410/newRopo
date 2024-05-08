import { m } from 'framer-motion';

import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import { IBlogPostProps } from 'src/types/blog';
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
};

export default function MarketingLatestPostItem({ post }: Props) {
  const theme = useTheme();

  return (
    <Stack
      component={m.div}
      whileHover="hover"
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: theme.customShadows.z12,
      }}
    >
      <m.div variants={varHover(1.25)} transition={varTranHover()}>
        <Image src={post.coverUrl} alt={post.title} ratio="3/4" />
      </m.div>

      <Stack
        justifyContent="space-between"
        sx={{
          p: 5,
          width: 1,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        {/* <Stack spacing={2}>
          <PostTimeBlock
            createdAt={fDate(post.createdAt)}
            duration={post.duration}
            sx={{ color: 'inherit', opacity: 0.72 }}
          />
          <Typography>{post.title}</Typography>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
          <Avatar src={post.author.avatarUrl} sx={{ mr: 1 }} />
          {post.author.name}
        </Stack> */}
      </Stack>
    </Stack>
  );
}
