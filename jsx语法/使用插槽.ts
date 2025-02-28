// v-slots
const render = () => (
  <span class="flex items-center">
    <jm-popover
      trigger="hover"
      width="400"
      v-slots={{
        reference: () => (
          <span class="flex items-center">
            <el-icon class="mr-1">
              <QuestionFilled />
            </el-icon>
            {MsgEnum.ipSegments}
          </span>
        ),
        default: () => (
          <ul>
            <li>x.x.x.x (0 &lt;= x &lt;= 255)</li>
            <li>x.x.x.x/mask (16 &lt;= mask &lt;= 32)</li>
          </ul>
        )
      }}
    ></jm-popover>
  </span>
)
