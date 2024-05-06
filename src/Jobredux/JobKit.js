import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Asynchronous thunk for fetching jobs
export const fetchJobs = createAsyncThunk(
    'jobs/fetchJobs',
    async ({ offset, filters }, { getState }) => {
        // Creating headers for fetching APIs 
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 10,
            "offset": offset,
            ...filters
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };
        // Calling API by using REACT_APP_API_BASE from .env file to not show actual API
        const apiUrl = process.env.REACT_APP_API_BASE;
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();
        return data.jdList;
    }
);

const initialState = {
    // Initial states to store the data and state while calling in jobList.jsx
    allJobs: [],
    visibleJobs: [],
    isLoading: false,
    hasMore: true,
    filter: {
        location: '',
        jobRole: '',
        minExp: null,
        minJdSalary: null,
        workType: '',
        companyName: ''
    }
};

const JobKit = createSlice({
    name: 'jobs',
    initialState,
    // Reducers for filtering
    reducers: {
        setFilteredJobs: (state, action) => {
            // Update filter state
            state.filter = action.payload;
            // Filter visible jobs
            state.visibleJobs = filterJobs(state.allJobs, state.filter);
        },
    },
    extraReducers: (builder) => {
        builder
            // Pending for if no data is loaded yet or during first-time rendering or on refreshing
            .addCase(fetchJobs.pending, (state) => {
                state.isLoading = true;
            })
            // Fetching data when given data is fully rendered so new data can be fetched
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.allJobs = [...state.allJobs, ...action.payload];
                state.visibleJobs = filterJobs(state.allJobs, state.filter);
                state.hasMore = action.payload.length > 0;
                state.isLoading = false;
            })
            .addCase(fetchJobs.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

// Exporting the reducers for use
export const { setFilteredJobs } = JobKit.actions;
export default JobKit.reducer;

// Helper function to filter jobs
const filterJobs = (jobs, filter) => {
    const { location, jobRole, minExp, minJdSalary, workType, companyName } = filter;
    return jobs.filter(job => {
        const jobLocationMatches = job.location?.toLowerCase().includes(location.toLowerCase()) || !location;
        const jobRoleMatches = job.jobRole?.toLowerCase().includes(jobRole.toLowerCase()) || !jobRole;
        const minExpMatches = minExp ? job.minExp >= minExp : true;
        const minSalaryMatches = minJdSalary ? job.minJdSalary >= minJdSalary : true;
        const companyNameMatches = job.companyName?.toLowerCase().includes(companyName.toLowerCase()) || !companyName;
        const workTypeMatches = !workType || (workType === 'remote' ? job.location?.toLowerCase() === 'remote' : job.location?.toLowerCase() !== 'remote');
        return jobLocationMatches && jobRoleMatches && minExpMatches && minSalaryMatches && companyNameMatches && workTypeMatches;
    });
};
