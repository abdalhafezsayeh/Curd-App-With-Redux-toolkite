import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Start AsyncFunction Gat All Posts
export const fetchPostsApi = createAsyncThunk(
  "postes/fetchPostsApi",
  async (_, thunkAPI) => {
    // Its Return Some Value
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await fetch("http://localhost:5000/posts");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Start AsyncFunction Delete With Id Post
export const deleteWithId = createAsyncThunk(
  "postes/deleteWithId",
  async (id, thunkAPI) => {
    // Its Return Some Value
    const { rejectWithValue } = thunkAPI;

    try {
      await fetch(`http://localhost:5000/posts/${id}`, {
        method: "DELETE",
      });

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Start AsyncFunction Add Posts
export const addPosts = createAsyncThunk(
  "postes/addPosts",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await fetch("http://localhost:5000/posts", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json; charser=UTF-8",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Start AsyncFunction Edite Post
export const editePost = createAsyncThunk('postes/editePost', async(post, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  console.log(post);

  try {
    const response = await fetch(`http://localhost:5000/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json; charser=UTF-8",
      },
    })
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})



const initialState = {
  records: [],
  loading: false,
  error: null,
};

// Create Slice
const postesSlice = createSlice({
  name: "postes",
  initialState,
  reducers: {},

  // asyncThunk conditions
  extraReducers: {
    // Start GetAlllPosts
    [fetchPostsApi.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchPostsApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.records = action.payload;
    },
    [fetchPostsApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },

    // Start Delete Post With Id
    [deleteWithId.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [deleteWithId.fulfilled]: (state, action) => {
      state.loading = false;
      state.records = state.records.filter((el) => el.id !== action.payload);
    },
    [deleteWithId.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },

    // Start Add Posts
    [addPosts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.records.push(action.payload);
    },
    [addPosts.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },


    // Start Edite Post 
    [editePost.pending]: (state) => {
      state.loading = true;
      state.error = null; 
    },
    [editePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.records.push(action.payload)
    },
    [editePost.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    }



  },
});

export default postesSlice.reducer;
