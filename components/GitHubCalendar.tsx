'use client';
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from 'react';
import Image from 'next/legacy/image';
import Calendar, {
  type Props as ActivityCalendarProps
} from 'react-activity-calendar';
import { Skeleton } from '@nextui-org/react';

// Adopted from https://github.com/grubersjoe/react-github-calendar
// Copyright (c) 2019 Jonathan Gruber, MIT License

interface Props extends Omit<ActivityCalendarProps, 'data' | 'theme'> {
  username: string;
}

async function fetchCalendarData(username: string): Promise<ApiResponse> {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
  );
  const data: ApiResponse | ApiErrorResponse = await response.json();

  if (!response.ok) {
    throw Error(
      `Fetching GitHub contribution data for "${username}" failed: ${
        (data as ApiErrorResponse).error
      }`
    );
  }

  return data as ApiResponse;
}

function GithubCalendar({ username, ...props }) {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchCalendarData(username)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [username]);

  useEffect(fetchData, [fetchData]);

  if (loading || !data) {
    return (
      <>
        <Skeleton className="h-3 w-3/5 rounded-lg" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
      </>
    );
  }

  return (
    <>
      <div>
        <Calendar
          data={selectLastNDays(data.contributions, 250)}
          theme={{
            dark: ['#000000', '#fb5fbd']
          }}
          blockSize={20}
          blockMargin={6}
          blockRadius={7}
          {...props}
          maxLevel={4}
        />
      </div>
    </>
  );
}

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ApiResponse {
  total: {
    [year: number]: number;
    [year: string]: number;
  };
  contributions: Array<Activity>;
}

interface ApiErrorResponse {
  error: string;
}

const selectLastNDays = (contributions, days) => {
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - days);

  return contributions.filter((activity) => {
    const activityDate = new Date(activity.date);
    return activityDate >= startDate && activityDate <= today;
  });
};

export default GithubCalendar;
